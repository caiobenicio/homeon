package org.home.on.security;

import java.security.Principal;

import org.home.on.utils.ResourcePaths;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.home.on.utils.ResourceBase;
import org.home.on.utils.ResourcePaths;

@RestController
@RequestMapping(ResourcePaths.LOGIN_PATH)
public class SecurityService implements ResourceBase {

    @RequestMapping(method = { RequestMethod.GET })
    public Principal user(Principal user) {
        return user;
    }

}
