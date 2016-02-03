import ExpFrameBaseComponent from 'exp-player/components/exp-frame-base';

export default ExpFrameBaseComponent.extend({
    utype: 'exp-add-frame',
    meta: {
        name: 'ExpAddFrame',
        description: 'TODO: a description of this frame goes here.',
        parameters: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'A unique identifier for this item'
                },
                title: {
                    type: 'string',
                    default: 'Add a Title'
                }
                // define additional parameters here
            },
            required: ['id']
        },
        data: {
            type: 'object',
            properties: {
                // define data structure here
            }
        }
    }
});
