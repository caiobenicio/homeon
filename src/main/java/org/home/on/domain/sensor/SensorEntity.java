package org.home.on.sensor;

import org.home.on.utils.BaseEntity;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_sensor")
@AttributeOverride(name = "id", column = @Column(name = "pk_id"))
public class SensorEntity extends BaseEntity<Long> {

    private static final long serialVersionUID = 201602010251L;


    @NotNull
    @Size(min = 4, max = 120)
    @Column(name = "nome", length = 120, nullable = false)
    private String nome;

    @NotNull
    @Column(name = "descricao", length = 255, nullable = false)
    private String descricao;

    @NotNull
    @Column(name = "estado", length = 10, nullable = false)
    private char estado;

    public SensorEntity() {
    }

    public SensorEntity(String nome, String descricao, char estado) {
        this.nome = nome;
        this.descricao = descricao;
        this.estado = estado;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public char getEstado() {
        return estado;
    }

    public void setEstado(char estado) {
        this.estado = estado;
    }
}

