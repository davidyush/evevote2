import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { removePerson } from '../../../actions/people_actions'

import Card from './Card'

import { css } from 'aphrodite/no-important'
import cards from '../../../styles/vk/cards_styl'

class Cards extends PureComponent {
  makeName = (str) => {
    if(str.length > 17) {
      str = str.slice(0,16) + '..';
    }
    return str;
  }

  render() {
    const { people, loading, removePerson } = this.props;

    if(loading) {
     return (
       <section className={css(cards.cardsWrapper)}>
        <div className={css(cards.wrapLoading)}>
          <div className={css(cards.loading)}></div>
        </div>
       </section>
     )
   } else if(people && people[0]) {
      return (
        <section className={css(cards.cardsWrapper)}>
          <div className={css(cards.cards)}>
            { people.map(person => (
                <Card
                  uid={person.uid}
                  key={person.uid}
                  firstName={person.first_name}
                  lastName={person.last_name}
                  fullName={this.makeName(`${person.first_name} ${person.last_name}`)}
                  img={person.photo_200 || person.photo_100}
                  removePerson={removePerson} />
            ))}
          </div>
        </section>
      )
    } else {
      return (
        <section className={css(cards.cardsWrapper)}>
          <div>nothing. try again.</div>
        </section>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    loading: state.people.loading
  }
}

export default connect(mapStateToProps, { removePerson })(Cards);
