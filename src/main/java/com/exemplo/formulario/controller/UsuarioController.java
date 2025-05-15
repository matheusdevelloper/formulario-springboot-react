package com.exemplo.formulario.controller;

import org.springframework.web.bind.annotation.*;
import com.exemplo.formulario.model.Usuario;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Permitir acesso do React
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();

    @PostMapping
    public Usuario adicionarUsuario(@RequestBody Usuario usuario) {
        usuarios.add(usuario);
        return usuario;
    }

    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarios;
    }
}