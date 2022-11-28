package cursolucas.springfull.dao;

import cursolucas.springfull.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario iniciarSesion(Usuario usuario);
}
