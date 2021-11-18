import React from "react"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { api } from "../../Services"
import MockAdapter from "axios-mock-adapter"
import { Register } from "../../Pages/Register"


const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({ children }) => children,
    useHistory: () => ({
        push: mockHistoryPush
    })
}))

const apiMock = new MockAdapter(api)

describe("Register", () => {
    test("espera-se que faça o registro de uma conta", async () => {
        apiMock.onPost("/users").replyOnce(200, {})
        render(<Register />)

        const nameField = screen.getByPlaceholderText("Digite seu nome")
        const emailField = screen.getByPlaceholderText("Digite seu E-mail")
        const socialField = screen.getByPlaceholderText("Digite sua rede social")
        const dateField = screen.getByLabelText("Data de Nascimento")
        const homeField = screen.getByLabelText("Quando Sai de casa:")
        const passwordField = screen.getByPlaceholderText("Digite sua Senha")
        const confirmPasswordField = screen.getByPlaceholderText("Confirme sua Senha")
        const buttonRegister = screen.getByText("Entrar")

        fireEvent.change(nameField, { target : { value: "Moisés" } })
        fireEvent.change(emailField, { target : { value: "ex@ex.com" } })
        fireEvent.change(socialField, { target : { value: "facebook.com" } })
        fireEvent.change(dateField, { target : { value: "13/08/1993" } })
        fireEvent.change(homeField, { target : { value: "12/10/2010" } })
        fireEvent.change(passwordField, { target : { value: "123456" } })
        fireEvent.change(confirmPasswordField, { target : { value: "123456" } })
        fireEvent.click(buttonRegister)

        await waitFor(() => {
            expect(nameField).toHaveValue("Moisés")
            expect(emailField).toHaveValue("ex@ex.com")
            expect(socialField).toHaveValue("facebook.com")
            expect(dateField).toHaveValue("13/08/1993")
            expect(homeField).toHaveValue("12/10/2010")
            expect(passwordField).toHaveValue("123456")
            expect(confirmPasswordField).toHaveValue("123456")
            expect(mockHistoryPush).toHaveBeenCalledWith("/")
        })
    })
})