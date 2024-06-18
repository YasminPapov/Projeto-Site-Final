package br.com.podraodoratao.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.podraodoratao.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {

}
