<?php

function vdplug_image_gallery_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/image-gallery'
    );
}
add_action('init', 'vdplug_image_gallery_init');
