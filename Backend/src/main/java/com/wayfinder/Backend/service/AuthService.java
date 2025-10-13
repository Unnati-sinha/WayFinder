package com.wayfinder.Backend.service;

import com.wayfinder.Backend.model.User;
import com.wayfinder.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(String email, String password, String firstName, String lastName) {
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("User already exists with email: " + email);
        }

        User user = new User(email, password, firstName, lastName);
        return userRepository.save(user);
    }

    public User authenticateUser(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // In a real application, you would hash and compare passwords
            // For now, we'll do a simple comparison
            if (password.equals(user.getPassword())) {
                return user;
            }
        }

        throw new RuntimeException("Invalid email or password");
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
