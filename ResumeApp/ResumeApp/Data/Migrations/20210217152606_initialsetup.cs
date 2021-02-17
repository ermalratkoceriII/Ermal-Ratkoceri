using Microsoft.EntityFrameworkCore.Migrations;

namespace ResumeApp.Data.Migrations
{
    public partial class initialsetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Information",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Birthday = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<int>(nullable: false),
                    AboutMe = table.Column<string>(nullable: true),
                    Experience = table.Column<string>(nullable: true),
                    Skills = table.Column<string>(nullable: true),
                    Hobbies = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Information", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Information");
        }
    }
}
