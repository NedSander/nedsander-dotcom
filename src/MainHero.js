import React, {Component} from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Heading, Hero } from 'react-bulma-components';
import Navbar from './Navbar';

export default class BulmaHero extends Component {

    render() {
        return(
            <div>
                    <Hero color="dark" className="has-bg-img" >
                    <Hero.Head>
                        <Navbar></Navbar>
                    </Hero.Head>
                    <Hero.Body>
                        <Container>
                        <Heading>
                        Hero title Primary
                        </Heading>
                        <Heading subtitle size={3}>
                        Subtitle
                        </Heading>
                        </Container>
                    </Hero.Body>
                    </Hero>
            </div>
        )
    }
}