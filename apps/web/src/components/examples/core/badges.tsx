import { Badge } from "@olyx/react";

export const BadgesExamples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* filled modes */}
      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="filled">Primary</Badge>

        <Badge mode="filled" doted>
          Doted
        </Badge>

        <Badge mode="filled">Error</Badge>

        <Badge mode="filled" shape="rounded">
          9
        </Badge>
      </div>
      {/* light modes */}
      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="light">Light</Badge>
        <Badge mode="light" doted>
          Doted
        </Badge>
        <Badge mode="light">Error</Badge>
      </div>
      {/* lighter modes */}
      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="lighter">lighter</Badge>
        <Badge mode="lighter" doted>
          Doted
        </Badge>
        <Badge mode="lighter">Error</Badge>
      </div>

      {/* Strock modes */}
      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="stroke">stroke</Badge>
        <Badge mode="stroke" doted>
          Doted
        </Badge>
        <Badge mode="stroke">Error</Badge>
      </div>

      {/* Sizes */}
      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="filled" size="sm">
          size md
        </Badge>
        <Badge mode="filled" doted size="md">
          Doted
        </Badge>
        <Badge mode="filled" size="md">
          size md
        </Badge>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Badge mode="filled" size="md">
          <i className="hgi hgi-stroke hgi-checkmark-circle-02" />
          size md
        </Badge>

        <Badge mode="filled" size="md" disabled>
          <i className="hgi hgi-stroke hgi-checkmark-circle-02" />
          disabled
        </Badge>
      </div>
    </div>
  );
};
