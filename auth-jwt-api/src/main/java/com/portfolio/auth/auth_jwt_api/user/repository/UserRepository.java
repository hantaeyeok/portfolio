package com.portfolio.auth.auth_jwt_api.user.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.portfolio.auth.auth_jwt_api.user.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    // 이메일(로그인 ID)로 사용자 찾기
    Optional<User> findByEmail(String email);

    // 이메일 + 소셜 로그인 제공자 조합으로 사용자 찾기
    Optional<User> findByEmailAndProvider(String email, String provider);

    // 중복 체크용
    boolean existsByEmail(String email);
} 