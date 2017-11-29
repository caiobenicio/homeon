package org.home.on.permission;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.home.on.utils.GenericService;
import org.home.on.utils.ResourcePaths;

@RestController
@RequestMapping(path = ResourcePaths.PERMISSION_PATH)
public class PermissionService extends GenericService<PermissionEntity, Long> {

}
