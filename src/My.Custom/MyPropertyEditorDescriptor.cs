using EPiServer;
using EPiServer.Cms.Shell.Extensions;
using EPiServer.Core;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;
using System;
using System.Collections.Generic;

namespace My.Custom
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = MyProperty.UIHint)]
    public class MyPropertyEditorDescriptor : EditorDescriptor
    {
        public MyPropertyEditorDescriptor()
        {
            ClientEditingClass = "my-custom/PropertyControl";
        }

		public override void ModifyMetadata(ExtendedMetadata metadata, IEnumerable<Attribute> attributes)
		{
			var parent = metadata.FindTopMostContentMetadata();
			if (parent != null)
			{
				var parentType = parent.Model.GetOriginalType();
				this.EditorConfiguration["context_parentType"] = parentType.Name;
				this.EditorConfiguration["context_link"] = ((IContent)parent.Model).ContentLink; // it will be empty for local block creating in ContentArea
			}

			base.ModifyMetadata(metadata, attributes);
		}
	}
}