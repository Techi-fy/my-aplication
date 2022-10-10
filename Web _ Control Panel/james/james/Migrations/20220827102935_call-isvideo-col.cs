﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace james.Migrations
{
    public partial class callisvideocol : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isVideo",
                table: "callLogs",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isVideo",
                table: "callLogs");
        }
    }
}
