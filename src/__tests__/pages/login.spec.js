import React from "react"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { api } from "../../Services"
import MockAdapter from "axios-mock-adapter"
import { Login } from "../../Pages/Login"


const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({ children }) => children,
    useHistory: () => ({
        push: mockHistoryPush
    })
}))

const apiMock = new MockAdapter(api)

describe("Login", () => {
    test("espera-se que o usuário faça o login", async () => {
        apiMock.onPost("/login").replyOnce(200, {})
        render(<Login handleLogin={() => {}} />)

        
        const emailField = screen.getByPlaceholderText("Digite seu E-mail")
        const passwordField = screen.getByPlaceholderText("Digite sua Senha")
   
        const buttonLogin = screen.getByText("Entrar")

        fireEvent.change(emailField, { target : { value: "ex@ex.com" } })
        fireEvent.change(passwordField, { target : { value: "123456" } })
        fireEvent.click(buttonLogin)

        await waitFor(() => {
            expect(emailField).toHaveValue("ex@ex.com")
            expect(passwordField).toHaveValue("123456")
            expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard")
        })
    })
})