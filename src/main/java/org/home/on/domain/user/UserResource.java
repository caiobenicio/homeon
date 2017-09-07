package org.home.on.domain.user;
import org.apache.tomcat.util.descriptor.web.ResourceBase;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.home.on.utils.GenericService;
import org.home.on.utils.ResourcePaths;



@RestController
@RequestMapping(path = ResourcePaths.USER_PATH)
public class UserResource extends GenericService<UserEntity, Long> {

    
    

}
