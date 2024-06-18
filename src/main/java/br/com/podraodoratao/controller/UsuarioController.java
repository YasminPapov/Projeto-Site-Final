package br.com.podraodoratao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.podraodoratao.model.Usuario;
import br.com.podraodoratao.repository.UsuarioRepository;

@CrossOrigin("*")
@RestController
@RequestMapping ("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> listaUsuarios () {
		List<Usuario>lista = (List<Usuario>)repository.findAll();
		return ResponseEntity.status(200).body(lista);
	}

	@PostMapping
	public Usuario criarUsuario (@RequestBody Usuario usuario) {
		Usuario usuarioNovo = repository.save(usuario);
		return usuarioNovo;
	}
	
	@PutMapping
	public Usuario atualizarUsuario (@RequestBody Usuario usuario) {
		Usuario usuarioNovo = repository.save(usuario);
		return usuarioNovo;
	}
	@DeleteMapping ("{id}")
	public Optional<Usuario> deletarUsuario (@PathVariable Integer id) {
		Optional<Usuario> usuario = repository.findById(id);
		repository.deleteById(id);
		return usuario;
	}
}
