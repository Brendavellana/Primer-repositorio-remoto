package com.generation.bren.services;

import com.generation.bren.models.Usuario(Models);

import com.generation.bren.repositories.UsuarioRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service

public class UsuarioService {
	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList <UsuariModel>obtenerUsuarios({
		return(ArrayList<UsuarioModel>)usuariorepository.findall();
	
		
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
	     return usuarioRepository.save(usuario);
	    }

	}
}