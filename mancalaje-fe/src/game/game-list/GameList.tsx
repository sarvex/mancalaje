import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {control} from "../../theme";
import {ListItemLink, RemoveComponentIcon, RoomComponentIcon} from "../../components/Icons";
import {Game} from "../../types";
import logo from "../../home/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import './../../index.css';
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {State} from "../../reducers/reducerIndex";
import MancalaJeHeader from "../../components/MancalaJeHeader";
import {Link} from "react-router-dom";
import {logOut, makeDeleteRequest, makeGetRequest, makePostRequest} from "../../actions/OAuthRouting";
import {createOAuth} from "../../index";
import {MySnackbarContentWrapper} from "../../components/SnackbarContent";
import Box from "@material-ui/core/Box";


interface GameListProps extends State {
    game?: Game;
    mancalaReducer?: any;
    boardName: string;
}

class GameList extends React.Component<GameListProps, GameListProps> {


    constructor({props}: { props: GameListProps }) {
        super(props);
        this.state = {boardName: ''};
    }

    componentDidMount() {
        this.loadAllBoards();
    }

    render() {
        return (
            <MancalaJeHeader>
                <AppBar title="Game room center title" position="relative">
                    <Typography variant="h1">Select a room or create one</Typography>
                </AppBar>
                <AppBar title="Game room center warning" position="relative">

                    <Typography component="h2" variant="h2">We're sorry, but MancalaJe isn't ready yet. Please try
                        again
                        later!</Typography>
                </AppBar>
                <AppBar title={"Game list controls"} position={"relative"}>
                    <TextField
                        style={control}
                        label={'Room name'}
                        error={this.state.boardName.length === 0}
                        helperText={this.getRoomNameHelperText()}
                        onChange={(newValue) => this.setState({
                            boardName: newValue.target.value
                        })}/>
                    <br/>
                    <Button
                        style={control}
                        onClick={() => this.handleClick()}>Submit</Button>
                </AppBar>
                {this.state.statusError ? (
                    <Grid item xs={12}>
                        <MySnackbarContentWrapper
                            variant="error"
                            message={this.state.statusError}
                            onClose={() => this.setState({
                                statusError: ''
                            })}
                        />
                    </Grid>) : <div/>}
                <AppBar title="Game room center options" position="relative">
                    {this.state && this.state.game ? (
                        <Box>
                            <Typography variant="h3"
                                        component="h3">Listing {this.state.game.boardManagers.length} rooms</Typography>
                            <List component="nav" aria-label="Game room list">
                                {this.state.game.boardManagers.map(row => (
                                    <ListItem key={row.boardManagerId} component={'li'}>
                                        <Link to={`gameStart/${row.boardManagerId}`}>
                                            <ListItem component="span" button>
                                                <ListItemIcon>
                                                    <RoomComponentIcon/>
                                                </ListItemIcon>
                                                {row.board.name}
                                            </ListItem>
                                        </Link>
                                        <ListItemLink onClick={() => this.handleRemoveRoom(row.boardManagerId)}>
                                            <RemoveComponentIcon/>
                                        </ListItemLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>) : (
                        <h1>Loading data...<img src={logo} className="App-logo-loading" alt="logo"/></h1>)}
                    <Button
                        style={control}
                        onClick={() => this.logOut()}>Logout</Button>
                </AppBar>
            </MancalaJeHeader>
        );
    }

    private handleClick() {
        let messageBody = JSON.stringify({
            boardName: this.state.boardName
        });
        makePostRequest('mancala/boards', this.state, this.props, () => this.loadAllBoards(), messageBody);
    }


    private loadAllBoards() {
        makeGetRequest('mancala/boards/all', this.props, (data: any) => {
            this.setState({
                game: data
            });
        });
    }

    private handleRemoveRoom(roomId: number) {
        makeDeleteRequest('mancala/boards/' + roomId, this.props, () => this.loadAllBoards());
    }

    private logOut() {
        this.props.dispatch(createOAuth({}));
        logOut(this.props);
    }

    private getRoomNameHelperText() {
        if (!this.state.boardName) {
            return 'Room must have a name!';
        }
        return '';
    }
}

// function mapDispatchToProps(dispatch: any) {
//     return {actions: bindActionCreators(mancalaReducer, dispatch)}
// }

const mapStateToProps = (state: GameListProps) => {
    return {
        oauth: state.mancalaReducer.oauth,
        router: state.router
    }
};
// @ts-ignore
export default connect(mapStateToProps)(GameList);