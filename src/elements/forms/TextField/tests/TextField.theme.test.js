import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { TextField } from '..';

describe('TextField using Theme color', () => {
  it('should return a TextField object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)',
        },
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <TextField bg="grapeSoda.dark" color="grapeSoda.light" name="myButton">Lorem Ipsum</TextField>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TextField using custom brand colors', () => {
  it('should return a TextField object with custom brand primary color', () => {
    const theme = {
      colors: {
        brandPrimary: {
          base: 'hsl(100, 84.6%, 28%)',
          dark: 'hsl(105, 33.9%, 23.7%)',
          light: 'hsl(113, 67.8%, 47.5%)',
        },
      },
      fonts: {
        base: 'Nunito, sans-serif',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <TextField name="myButton">I should be hsl(100, 84.6%, 28%) on focus and I should be in Nunito</TextField>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TextField using Theme Font Family', () => {
  it('should return a TextField object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <TextField fontFamily="trueSpace" name="myButton">Lorem Ipsum</TextField>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
