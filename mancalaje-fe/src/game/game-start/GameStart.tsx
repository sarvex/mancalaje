import React from "react";
import MancalaBoard from "../../components/MancalaBoard";
import {PlayerState} from "../../types";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {control, theme} from "../../theme";
import {Button, Typography} from "@material-ui/core";
import logo from "../../home/logo.svg";
import {connect} from "react-redux";
import {State} from "../../reducers/reducerIndex";
import MancalaJeHeader from "../../components/MancalaJeHeader";
import {makeGetRequest} from "../../actions/OAuthRouting";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

interface GameStartProps extends State {
    mancalaReducer?: any
    playerState?: PlayerState
    id?: number
    match?: any
}

class GameStart extends React.Component<GameStartProps, GameStartProps> {

    constructor({props}: { props: GameStartProps }) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        makeGetRequest('/mancala/boards/' + this.props.match.params.id, this.props,
            (data: any) => this.setState({
                playerState: data
            }));
    }

    render() {
        return (<MancalaJeHeader>
            {
                this.state && this.state.playerState ? (<MuiThemeProvider theme={theme}>
                        <AppBar title="Game Start Titkle" position="relative">
                            {this.state.playerState.loggedPlayer ?
                                (<Box>
                                    <Typography variant="h2">Hello {this.state.playerState.loggedPlayer.name}</Typography>
                                    {this.state.playerState.loggedPlayer.opponent ?
                                        (<Typography variant="h2">You are currently playing mancalaje
                                            with {this.state.playerState.loggedPlayer.opponent.name}</Typography>) : (
                                            <Typography variant="h2">Waiting for player to join room...</Typography>)

                                    }
                                </Box>) : (<Typography variant="h2">Loading...</Typography>)}

                        </AppBar>
                        <AppBar title="Game Start Board" position="relative">
                            <MancalaBoard data={this.state.playerState.boardManager}/>
                        </AppBar>
                        <AppBar title={'Game Start Controls'} position={"relative"}>
                            <Button
                                style={control}
                                onClick={() => this.leaveRoom()}>Leave room</Button>
                        </AppBar>
                    </MuiThemeProvider>)
                    : (<h1>Loading data...<img src={logo} className="App-logo-loading" alt="logo"/></h1>)
            }
        </MancalaJeHeader>)
    }

    private leaveRoom() {
        this.props.history.push(`/gameList`)
    }
}


const mapStateToProps = (state: GameStartProps) => {
    return {
        oauth: state.mancalaReducer.oauth,
        router: state.router
    }
};
// @ts-ignore
export default connect(mapStateToProps)(GameStart);