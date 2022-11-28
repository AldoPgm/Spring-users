package cursolucas.springfull.controller;

import cursolucas.springfull.Usuario;
import cursolucas.springfull.dao.UsuarioDao;
import cursolucas.springfull.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class authController {

    @Autowired
    UsuarioDao usuarioDao;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(Usuario usuario){

      Usuario usuarioLogueado = usuarioDao.iniciarSesion(usuario);

      if(usuarioLogueado != null){
          String tokenJwt = jwtUtil.create(String.valueOf(usuarioLogueado.getId()), usuarioLogueado.getGmail());
          return tokenJwt;

      }
        return "FAIL";

    }
}
