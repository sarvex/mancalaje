package org.jesperancinha.games.kalagameservice.repository

import org.assertj.core.api.Assertions.assertThat
import org.jesperancinha.games.kalagameservice.model.Player
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import javax.transaction.Transactional

@DataJpaTest
internal open class KalaPlayerRepositoryTest {
    @Autowired
    private val kalaPlayerRepository: KalaPlayerRepository? = null

    @BeforeEach
    @Transactional
    open fun setUp() {
        kalaPlayerRepository!!.save(Player(
            username = "player1"
        ))
    }

    @Test
    fun testFindPlayerByUsernameEquals_whenLookingPerName_thenFindIt() {
        val player1 = kalaPlayerRepository!!.findPlayerByUsernameEquals("player1")
        assertThat(player1).isNotNull
        assertThat(player1?.username).isEqualTo("player1")
    }
}