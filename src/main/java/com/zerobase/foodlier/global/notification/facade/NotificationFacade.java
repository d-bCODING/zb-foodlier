package com.zerobase.foodlier.global.notification.facade;

import com.zerobase.foodlier.common.security.provider.dto.MemberAuthDto;
import com.zerobase.foodlier.module.notification.domain.model.Notification;
import com.zerobase.foodlier.module.notification.domain.type.NotificationType;
import com.zerobase.foodlier.module.notification.dto.NotificationDto;
import com.zerobase.foodlier.module.notification.dto.notify.Notify;
import com.zerobase.foodlier.module.notification.service.notification.NotificationService;
import com.zerobase.foodlier.module.notification.service.emitter.EmitterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NotificationFacade {
    private final static String INITIAL_MESSAGE = "개의 미열람 알림이 있습니다.";
    private final static String DELIMITER = "_";
    private final NotificationService notificationService;
    private final EmitterService emitterService;

    public SseEmitter subscribe(MemberAuthDto memberAuthDto) {
        String emitterId = emitterService.makeTimeIncludeId(memberAuthDto.getEmail());
        SseEmitter emitter = emitterService.createEmitter(memberAuthDto.getEmail());
        emitter.onCompletion(() -> emitterService.deleteEmitter(emitterId));
        emitter.onTimeout(() -> emitterService.deleteEmitter(emitterId));

        String eventId = emitterService.makeTimeIncludeId(memberAuthDto.getEmail());
        Long unReadNotification = notificationService.countUnreadNotification(memberAuthDto.getId());

        NotificationDto notificationDto = NotificationDto.builder()
                .id(0L)
                .sentAt(LocalDateTime.now())
                .notificationType(NotificationType.INITIAL)
                .content(unReadNotification + INITIAL_MESSAGE)
                .build();

        emitterService.send(emitter, eventId, emitterId, notificationDto);
        return emitter;
    }

    public void send(Notify notify) {
        Notification notification = notificationService.create(notify);
        String receiverEmail = notify.getReceiverEmail();
        String eventId = receiverEmail + DELIMITER + UUID.randomUUID();

        Map<String, SseEmitter> emitters = emitterService.findAllEmitter(receiverEmail);

        if(emitterService.isEmitterExists(emitters)){
            for (Map.Entry<String, SseEmitter> emitter : emitters.entrySet()) {
                emitterService.send(emitter.getValue(), eventId, emitter.getKey(), NotificationDto.from(notification));
            }
        }
    }



}

