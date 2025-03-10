// package com.equipos.equipos_api.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.Customizer;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             // Deshabilita CSRF para simplificar las APIs REST. 
//             .csrf(csrf -> csrf.disable())
//             // Configuración de autorización
//             .authorizeHttpRequests(authz -> authz
//                 // Protege las rutas de la API; se requiere autenticación para acceder a ellas
//                 .requestMatchers("/api/equipos/**").authenticated()
//                 // Permite el acceso público a otras rutas (por ejemplo, la parte del frontend)
//                 .anyRequest().permitAll()
//             )
//             // Configura la autenticación básica HTTP
//             .httpBasic(Customizer.withDefaults());

//         return http.build();
//     }
// }
