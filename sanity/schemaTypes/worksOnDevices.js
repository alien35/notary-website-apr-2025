export const worksOnDevices = {
    title: 'Works On Devices',
    name: 'worksOnDevices',
    type: 'object',
    fields: [
      {
        name: 'placeholder',
        title: 'Placeholder',
        type: 'string',
        description: 'This is a required field. You can leave it empty if not needed.',
      },
    ],
    preview: {
      select: {},
      prepare() {
        return {
          title: 'Works On Devices Block'
        };
      }
    },
  };
  