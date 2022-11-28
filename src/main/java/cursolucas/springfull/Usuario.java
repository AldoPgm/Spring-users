package cursolucas.springfull;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
@ToString @EqualsAndHashCode
public class Usuario {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Getter @Setter @Column(name = "id")
   private Long id;

    @Getter @Setter @Column(name = "nombre")
   private String nombre;

    @Getter @Setter @Column(name = "apellido")
   private String apellido;

    @Getter @Setter @Column(name = "gmail")
   private String gmail;

    @Getter @Setter @Column(name = "telefono")
   private Integer telefono;

    @Getter @Setter @Column(name = "password")
    private String password;

}
