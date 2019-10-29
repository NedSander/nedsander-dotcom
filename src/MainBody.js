import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, 
    Card, 
    Columns, 
    Content, 
    Heading, 
    Image, 
    Level, 
    Media, 
    Section } from 'react-bulma-components';
import logo from './logo.svg';

export default class MainBody extends Component {
    render() {
        return(
            <Section>
                <Columns>
                    <Columns.Column>
                        <Card>
                            <Card.Image size="4by3" src={logo} />
                            <Card.Content>
                                <Media>
                                <Media.Item renderAs="figure" position="left">
                                    <Image size={64} alt="64x64" src={logo} />
                                </Media.Item>
                                <Media.Item>
                                    <Heading size={4}>REACT</Heading>
                                    <Heading subtitle size={6}>but also bulma</Heading>
                                </Media.Item>
                                </Media>
                                <Content>
                                    {instructions}
                                    {link}
                                    <br />
                                    {exampleDate}
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                    <Columns.Column>
                        <Box>
                            <Content>
                                <Heading>Ned Sander</Heading>
                                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
                            </Content>
                            <Level>
                                <Level.Item>
                                    Linkedin?
                                </Level.Item>
                                <Level.Item>
                                    Github, maybe?
                                </Level.Item>
                                <Level.Item>
                                    Email?
                                </Level.Item>
                            </Level>
                        </Box>
                        <Box>
                        </Box>
                    </Columns.Column>
                </Columns>
            </Section>
        )
    }
}


var instructions = (
    <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
  );
  
  var link = (
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  );

  var exampleDate = (
    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  )