package com.generation.bren.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.bren.models.Usuariomodels;
import com.generation.bren.services.UsuarioService;

@RestController
@RequestMapping("/usuario")


public class UsuarioController {
	@Autowired
	UsuarioService usuarioService;
	@GetMapping()
	public ArrayList<Usuariomodels> obtenerUsuario(){
        return usuarioService.obtenerUsuarios();
  
	}

	@PostMapping()
	public Usuariomodels guardarUsuario(@RequestBody Usuariomodels usuario){
        return this.usuarioService.guardarUsuario(usuario);
    }


}
