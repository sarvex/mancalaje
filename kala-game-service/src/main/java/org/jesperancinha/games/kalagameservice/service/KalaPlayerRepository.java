package org.jesperancinha.games.kalagameservice.service;

import org.jesperancinha.games.kalagameservice.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KalaPlayerRepository extends JpaRepository<Player, Long> {
}
