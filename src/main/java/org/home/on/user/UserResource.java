package org.home.on.user;

import org.home.on.user.UserEntity;
import org.home.on.utils.GenericService;
import org.home.on.utils.ResourcePaths;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = ResourcePaths.USER_PATH)
public class UserResource extends GenericService<UserEntity, Long> {


}
