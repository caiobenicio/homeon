package org.home.on.domain.userpermission;

import org.home.on.utils.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user_permission")
public class UserPermissionEntity extends BaseEntity<UserPermissionKey> {

    private static final long serialVersionUID = 201602010251L;
}
