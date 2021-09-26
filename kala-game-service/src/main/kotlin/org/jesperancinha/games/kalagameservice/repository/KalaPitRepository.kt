package org.jesperancinha.games.kalagameservice.repository

import org.jesperancinha.games.kalagameservice.model.Pit
import org.springframework.data.jpa.repository.JpaRepository

interface KalaPitRepository : JpaRepository<Pit?, Long?>