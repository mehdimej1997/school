package com.example.demo.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {


    @Override
    protected void doFilterInternal(
//            this request params is used to do some modifications or extract data from it
            HttpServletRequest request,
//
            HttpServletResponse response,
//          chain responsibility Design pattern
            FilterChain filterChain) throws ServletException, IOException {
//        Check JWT TOKEN
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
//        Check if the token exist and contain Bearer keyword
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
//        Set the jwt token to the var jwt
        jwt = authHeader.substring(7);

    }
}
