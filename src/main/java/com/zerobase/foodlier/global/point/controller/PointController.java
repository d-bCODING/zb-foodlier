package com.zerobase.foodlier.global.point.controller;

import com.zerobase.foodlier.common.security.provider.dto.MemberAuthDto;
import com.zerobase.foodlier.module.payment.dto.PaymentRequest;
import com.zerobase.foodlier.module.payment.dto.PaymentResponse;
import com.zerobase.foodlier.module.payment.dto.PaymentResponseHandleFailDto;
import com.zerobase.foodlier.module.payment.service.PaymentService;
import com.zerobase.foodlier.module.transaction.dto.SuggestionForm;
import com.zerobase.foodlier.module.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/point")
public class PointController {
    private final PaymentService paymentService;
    private final TransactionService transactionService;

    @PostMapping("/charge")
    public ResponseEntity<PaymentResponse> requestPayments(
            @AuthenticationPrincipal MemberAuthDto memberAuthDto,
            @RequestBody PaymentRequest paymentRequest
    ) {
        return ResponseEntity.ok(paymentService.requestPayments(paymentRequest, memberAuthDto));
    }

    /**
     * redirect 되는 부분 협의 필요
     */
    @GetMapping("/success")
    public ResponseEntity<String> requestFinalPayments(
            @RequestParam String paymentKey,
            @RequestParam String orderId,
            @RequestParam Long amount
    ) {
        paymentService.requestFinalPayment(paymentKey, orderId, amount);
        return ResponseEntity.ok("결제 완료, 금액 : " + amount);
    }

    @GetMapping("/fail")
    public ResponseEntity<PaymentResponseHandleFailDto> requestFail(
            @RequestParam(name = "code") String errorCode,
            @RequestParam(name = "message") String errorMsg,
            @RequestParam(name = "orderId") String orderId
    ) {
        return ResponseEntity.ok(paymentService.requestFail(errorCode, errorMsg, orderId));
    }

    @PostMapping("/cancel")
    public ResponseEntity<String> requestPaymentCancel(
            @RequestParam String paymentKey,
            @RequestParam String cancelReason
    ) {
        String reason = paymentService.requestPaymentCancel(paymentKey, cancelReason);
        return ResponseEntity.ok("결제 취소 완료, 이유 : " + reason);
    }

    @PostMapping("/suggest/{requestMemberId}")
    public ResponseEntity<String> suggestPrice(
            @AuthenticationPrincipal MemberAuthDto memberAuthDto,
            @RequestBody SuggestionForm form,
            @PathVariable Long requestMemberId
    ) {
        return ResponseEntity.ok(transactionService
                .sendSuggestion(memberAuthDto, form, requestMemberId));
    }

    @PatchMapping("/suggest/approve/{chefMemberId}")
    public ResponseEntity<String> approveSuggestion(
            @AuthenticationPrincipal MemberAuthDto memberAuthDto,
            @PathVariable(name = "chefMemberId") Long chefMemberId
    ) {
        return ResponseEntity.ok(transactionService
                .approveSuggestion(memberAuthDto, chefMemberId));
    }

    @PatchMapping("/suggest/reject/{chefMemberId}")
    public ResponseEntity<String> rejectSuggestion(
            @AuthenticationPrincipal MemberAuthDto memberAuthDto,
            @PathVariable(name = "chefMemberId") Long chefMemberId
    ) {
        return ResponseEntity.ok(transactionService
                .rejectSuggestion(memberAuthDto, chefMemberId));
    }
}
