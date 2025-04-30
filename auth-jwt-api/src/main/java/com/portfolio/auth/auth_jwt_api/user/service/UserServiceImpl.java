package com.portfolio.auth.auth_jwt_api.user.service;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.portfolio.auth.auth_jwt_api.common.ResponseData;
import com.portfolio.auth.auth_jwt_api.common.ResponseHandler;
import com.portfolio.auth.auth_jwt_api.jwt.JwtUtil;
import com.portfolio.auth.auth_jwt_api.User.model.User;
import com.portfolio.auth.auth_jwt_api.User.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl {
    
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final ResponseHandler responseHandler;

    //일반 회원가입
    public ResponseEntity<ResponseData> register(String email, String rawPassword) {
        try {
            if (userRepository.existsByEmail(email)) {
                return responseHandler.createResponse("이미 등록된 이메일입니다.", email, HttpStatus.CONFLICT);
            }

            String encodedPassword = passwordEncoder.encode(rawPassword);
            User user = User.builder()
                    .userId(email)
                    .password(encodedPassword)
                    .provider("local")
                    .joinDate(LocalDate.now())
                    .build();

            userRepository.save(user);
            return responseHandler.createResponse("회원가입 완료", user, HttpStatus.OK);

        } catch (Exception e) {
            return responseHandler.handleException("회원가입 실패", e);
        }
    }

    //로그인(jwt 발급)
}
