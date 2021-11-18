import React from "react";
import { render, screen } from "@testing-library/react"

describe("Input email", () => {
    test("espera-se que renderize o input de email", () => {
        render(<input placeholder="Digite seu E-mail"/>)

        expect(screen.getAllByPlaceholderText("Digite seu E-mail")).toBeTruthy()
    })
})

describe("Input password", () => {
    test("espera-se que renderize o input de password", () => {
        render(<input placeholder="Digite seu Senha"/>)

        expect(screen.getAllByPlaceholderText("Digite seu Senha")).toBeTruthy()
    })
})

describe("Button login", () => {
    test("espera-se que renderize o botão de entrar", () => {
        render(<button>Entrar</button>)

        expect(screen.getAllByText("Entrar")).toBeTruthy()
    })
})