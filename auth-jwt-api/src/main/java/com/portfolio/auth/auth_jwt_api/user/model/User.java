package com.portfolio.auth.auth_jwt_api.user.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String userId; // 사용자 ID

    @Column(length = 255)
    private String password;  // 일반 로그인 비밀번호 (소셜 로그인은 null 가능)

    @Column(length = 10)
    private String provider; // "local" or "kakao"

    private LocalDate joinDate;

    @PrePersist
    public void prePersist() {
        if (this.joinDate == null) {
            this.joinDate = LocalDate.now();
        }
        if (this.provider == null) {
            this.provider = "local";
        }
    }
}
