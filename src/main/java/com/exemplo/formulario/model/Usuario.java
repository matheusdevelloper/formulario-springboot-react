package com.exemplo.formulario.model;

public class Usuario {

    private String nome;
    private String email;

    public Usuario() {
        // construtor padrão
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
