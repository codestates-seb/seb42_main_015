package com.witchdelivery.messageapp.domain.thema.repository;

import com.witchdelivery.messageapp.domain.thema.entitiy.Theme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Long> {
    Optional<Theme> findByThemeName(String themeName);
}
