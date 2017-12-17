import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Panel, Image} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs'

import './my-profile-view.css'

import {fetchFavs} from '../../state/favs'

export default connect(
  state => ({
    session: state.session.data,
    games: state.games.data,
    user: state.user,
    favs: state.favs
  }),
  dispatch => ({
    fetchFavsHelper: (accessToken, userId) => dispatch(fetchFavs(accessToken, userId))
  })
)(
  class MyProfileView extends React.Component {
    componentWillMount() {
      this.props.fetchFavsHelper(this.props.session.id, this.props.session.userId)
    }

    render() {
      const {
        user,
        favs,
        games
      } = this.props

      const currentUser =
        user.data ? user.data : null


      if (currentUser === null) {
        return (
          <Grid>
            <Row className="row-header">
              <Col xs={12}>
                <Panel className="panel-header">
                  <h3>Mój profil</h3>
                </Panel>
                <p className="alert-waiting">
                  Oczekiwanie na dane użytkownika...
                </p>
              </Col>
            </Row>
          </Grid>
        )
      }

      return (
        <Grid>
          <Row className="row-header">
            <Col xs={12}>
              <Panel className="panel-header">
                <h3>Mój profil</h3>
              </Panel>
            </Col>
          </Row>
          <Col xs={12} md={4} sm={6}>
            <div className="image__wrapper-bottom"
                 key={currentUser.id}>
              {
                currentUser.picture ? (
                    <Image
                      src={process.env.PUBLIC_URL + currentUser.picture}
                      className="user-avatar__user-profile"
                      alt={"Awatar użytkownika " + currentUser.usernamen}
                      responsive
                    />
                  ) : (
                    <Image
                      src={process.env.PUBLIC_URL + '/img/board-games-with-roles-blue.png'}
                      className="user-avatar__user-profile"
                      alt={"Awatar użytkownika " + currentUser.username}
                      responsive
                    />
                  )
              }
            </div>
          </Col>

          <Col xs={12} sm={6} md={8}>
            <Panel header={currentUser.username}
                   key={currentUser.id}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sodales convallis.
                Donec et libero in libero auctor maximus sed eget mi. Pellentesque condimentum metus
                faucibus lorem congue mattis. Etiam id posuere turpis. Vestibulum at pharetra sapien.
                Nunc magna velit, molestie at lacus vitae, convallis mattis felis. Nam ultrices volutpat
                arcu eget convallis. Suspendisse iaculis risus sit amet lorem aliquam, efficitur rhoncus
                nibh tincidunt. Integer finibus ultricies feugiat. Phasellus commodo sapien ut lacus
                convallis tristique. Etiam eros velit, lobortis id placerat non, rutrum in urna.</p>
            </Panel>
          </Col>

          <Col xs={12} md={12}>
            <Panel>
              <Tabs defaultActiveKey={1} id="tab">
                <Tab eventKey={1}
                     headerClass='pointer'
                     label="Posiadam">
                  <ul>Dummy</ul>
                </Tab>

                <Tab eventKey={2}
                     headerClass='pointer'
                     label="Szukam">
                  <ul>Foo</ul>
                </Tab>
              </Tabs>
            </Panel>
          </Col>

          <Col xs={12} md={12}>
            <Panel header="Ulubione gry">
              {
                (favs.favoriteGameIds.length !== 0 && games !== null) ? (
                    <div>
                      {
                        favs.favoriteGameIds.map(
                          fav => games.find(game => game.id === fav.gameId)
                        ).map(
                          game => (
                            <div key={game.id}>
                              <Link to={'game-profile/' + game.id}>
                                {game.name}
                              </Link>
                            </div>
                          )
                        )
                      }
                    </div>
                  ) : (
                    <p className="alert-waiting">
                      Nie masz jeszcze ulubionych gier.
                      <Link to="/games-list"><b>Przejdź do listy gier</b></Link>
                      i pokaż innym graczom, które planszówki lubisz najbardziej! :)
                    </p>
                  )
              }
            </Panel>
          </Col>
        </Grid>
      )
    }
  }
)