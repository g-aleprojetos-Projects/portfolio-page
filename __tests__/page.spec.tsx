import Home from "../src/app/page";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

describe('Home', () => {
  describe('Renderização', () => {

    test('Home DEVE ser igual ao snapshot', () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });

    test('DEVE renderizar a pagina "Home"', () => {
      render(<Home />);
    
      expect(screen.getByTestId("teste_home")).toBeInTheDocument();
    });  
  });
});