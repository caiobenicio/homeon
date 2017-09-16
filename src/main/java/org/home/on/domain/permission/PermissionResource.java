package org.home.on.domain.permission;

import org.home.on.utils.GenericService;
import org.home.on.utils.ResourcePaths;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ResourcePaths.PERMISSION_PATH)
public class PermissionResource extends GenericService<PermissionEntity, Long> {

}
