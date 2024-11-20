import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function save() {
    const blockProps = useBlockProps.save({
        className: 'image-gallery'
    });

    return (
        <div {...blockProps}>
            <div className='image-gallery-container'>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}

export default save;
