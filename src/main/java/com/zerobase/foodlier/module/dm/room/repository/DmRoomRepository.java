package com.zerobase.foodlier.module.dm.room.repository;

import com.zerobase.foodlier.module.dm.room.domain.model.DmRoom;
import com.zerobase.foodlier.module.request.domain.model.Request;
import com.zerobase.foodlier.module.dm.room.dto.DmRoomDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface DmRoomRepository extends JpaRepository<DmRoom, Long> {
    Optional<DmRoom> findByRequest(Request request);

    /**
     * DmRoomDto는 다음과 같은 값을 가져옵니다.
     * dm방 번호, 상대방 닉네임, 상대방 프로필이미지, 요청번호, 희망가격
     * 이 때 현재 나의 아이디가 포함되는 요청이면서
     * 요청에서의 아이디가 다른지 판별하여
     * 다르다면 닉네임과 프로필 이미지를 가져옵니다.
     */
    @Query("SELECT new com.zerobase.foodlier.module.dm.room.dto.DmRoomDto" +
            "(d.id, " +
            "CASE " +
            "  WHEN d.request.chefMember.member.id <> :requester " +
            "THEN d.request.chefMember.member.nickname " +
            "  ELSE d.request.member.nickname " +
            "END, " +
            "CASE " +
            "  WHEN d.request.chefMember.member.id <> :requester " +
            "THEN d.request.chefMember.member.profileUrl " +
            "  ELSE d.request.member.profileUrl " +
            "END, " +
            "d.request.id, " +
            "d.request.expectedPrice) " +
            "FROM DmRoom d WHERE " +
            "((d.request.chefMember.member.id = :requester AND d.isChefExit = false) " +
            "OR " +
            "(d.request.member.id = :requester AND d.isMemberExit = false))")
    Page<DmRoomDto> getDmRoomPage(@Param("requester") Long id, Pageable pageable);

    @Modifying
    @Query("UPDATE DmRoom d SET d.isMemberExit = true WHERE d.id = :roomId")
    void updateDmRoomByMember(@Param("roomId") Long roomId);

    @Modifying
    @Query("UPDATE DmRoom d SET d.isChefExit = true WHERE d.id = :roomId")
    void updateDmRoomByChef(@Param("roomId") Long roomId);

    void deleteDmRoomById(Long id);
}
