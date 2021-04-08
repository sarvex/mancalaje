package org.jesperancinha.games.kalagameservice.service;

import org.jesperancinha.games.kalagameservice.model.Board;
import org.jesperancinha.games.kalagameservice.model.Pit;
import org.jesperancinha.games.kalagameservice.model.Player;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import static org.jesperancinha.games.kalagameservice.model.PitType.LARGE;
import static org.jesperancinha.games.kalagameservice.model.PitType.SMALL;

@Service
public class GameServiceImpl implements GameService {

    @Override
    public Board createNewBoard(Player player) {
        final Board board = new Board();
        final ArrayList<Pit> pits = new ArrayList<>();
        board.setPits(pits);
        var lastPit = Pit.builder().player(player).pitType(SMALL).stones(6).build();
        board.setPitOne(lastPit);
        final var firstPit = lastPit;
        for (int i = 0; i < 5; i++) {
            var pit = Pit.builder().player(player).pitType(SMALL).stones(6).build();
            lastPit.setNextPit(pit);
            pits.add(lastPit);
            lastPit = pit;
        }
        pits.add(lastPit);
        final var kalahPit = Pit.builder().player(player).pitType(LARGE).stones(0).build();
        lastPit.setNextPit(kalahPit);
        lastPit = kalahPit;
        for (int i = 0; i < 6; i++) {
            var pit = Pit.builder().pitType(SMALL).stones(6).build();
            if (i == 0) {
                board.setPitTwo(pit);
            }
            lastPit.setNextPit(pit);
            pits.add(lastPit);
            lastPit = pit;

        }
        pits.add(lastPit);
        final var kalahPit2 = Pit.builder().pitType(LARGE).stones(0).build();
        lastPit.setNextPit(kalahPit2);
        lastPit = kalahPit2;
        pits.add(lastPit);
        lastPit.setNextPit(firstPit);
        board.setPits(pits);
        return board;
    }
}
