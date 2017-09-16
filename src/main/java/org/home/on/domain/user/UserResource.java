package org.home.on.domain.user;

import org.home.on.utils.GenericService;
import org.home.on.utils.ResourcePaths;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ResourcePaths.USER_PATH)
public class UserResource extends GenericService<UserEntity, Long> {

//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Override
//    public User insert(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return super.insert(user);
//    }

}
