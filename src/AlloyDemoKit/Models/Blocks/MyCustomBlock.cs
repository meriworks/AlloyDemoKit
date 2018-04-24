using System.ComponentModel.DataAnnotations;
using My.Custom;

namespace AlloyDemoKit.Models.Blocks
{
    [SiteContentType(GUID = "73F610A5-D705-4BCA-960A-3CA03F312D31", DisplayName = "My Custom Block")]
    [SiteImageUrl]
    public class MyCustomBlock : SiteBlockData
    {
        [UIHint(MyProperty.UIHint)]
        public virtual string MyCustomProperty { get; set; }
    }
}