package com.witchdelivery.messageapp.domain.font.repository;

import com.witchdelivery.messageapp.domain.font.entity.Font;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FontRepository extends JpaRepository<Font, Long> {

     Optional<Font> findByFontName(String fontName);

}
