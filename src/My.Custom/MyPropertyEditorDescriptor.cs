using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace My.Custom
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = MyProperty.UIHint)]
    public class MyPropertyEditorDescriptor : EditorDescriptor
    {
        public MyPropertyEditorDescriptor()
        {
            ClientEditingClass = "my-custom/PropertyControl";
        }
    }
}