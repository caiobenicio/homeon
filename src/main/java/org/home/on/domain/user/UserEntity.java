package org.home.on.domain.user;

import org.home.on.utils.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user")
public class UserEntity extends BaseEntity<Long> {

    private String name;

    public UserEntity() {
    }

    public UserEntity(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
