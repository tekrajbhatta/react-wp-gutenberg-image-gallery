import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function Edit() {
    const blockProps = useBlockProps({
        className: 'image-gallery'
    });

    const ALLOWED_BLOCKS = ['core/image'];
    const TEMPLATE = [
        ['core/image']
    ];

    return (
        <div {...blockProps}>
            <div className='image-gallery-container'>
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={false}
                    renderAppender={InnerBlocks.ButtonBlockAppender}
                />
            </div>
        </div>
    );
}

export default Edit;